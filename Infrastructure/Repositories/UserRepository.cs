﻿using Domain.Entities;
using Infrastructure.Data;
using Infrastructure.Repositories.Base;
using Application.IRepositories;
using System.Threading.Tasks;
using System;
using System.Linq;
using System.Text.Json;
using Infrastructure.Utils;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using System.Collections.Generic;

namespace Infrastructure.Repositories
{
    public class UserRepository : Repository<UserEntity>, IUserRepository
    {
        private readonly IUtils _utils;
        private readonly ProductContext _context;
        public UserRepository(ProductContext context, IUtils utils) : base(context) 
        {
            _context = context;
            _utils = utils; 
        }

        public async Task<bool> FindEmail(string email)
        {
            var user = _context.Set<UserEntity>().FirstOrDefault(u=>u.email==email);
            if (user == null) { return  false ;  } else { return  true ; }
        }

        public async Task<string> login(string email, string password)
        {
            string response = "";
            string encodedData = _utils.EncryptPwd(password);

            var user = _context.Set<UserEntity>().Include(user=>user.role).FirstOrDefault(u => u.email == email);
            if (user == null)
            {
                response = "email does not exist";
            }
            else if (user.password != encodedData)
            {
                response = "incorrect password";
            }
            else
            {
                user.password = "";
                string token = _utils.GenerateToken(user);
                JsonSerializerOptions options = new()
                {
                    ReferenceHandler = ReferenceHandler.IgnoreCycles,
                    WriteIndented = true
                };
                string jsonResult = JsonSerializer.Serialize(user, options);
                response = jsonResult + "," + token;

                //string t = "{\"token\":\"" + token + "\"}";
                string t = "[{\"token\":\"" + token + "\"},"+jsonResult + "]";
                return t;
            }

            return response;

        }

        public async Task<UserEntity> Register(UserEntity entity)
        {
            string encodedData = _utils.EncryptPwd(entity.password);
            
            var role = _context.Roles.Where(r => r.RoleName == "MEMBER").FirstOrDefault();

            var newUser = new UserEntity
            {
                email = entity.email,
                password = encodedData,
                address = entity.address,
                name = entity.name,
                role = role
            };

            await _context.Set<UserEntity>().AddAsync(newUser);
            _context.SaveChanges();
            entity.password = "";

            return entity;

        }

        public async Task<int> AddAdmin(UserEntity entity)
        {
            string encodedData = _utils.EncryptPwd(entity.password);

            var role = _context.Roles.Where(r => r.RoleName == "ADMIN").FirstOrDefault();

            //var newUser = new UserEntity
            //{
            //    email = entity.email,
            //    password = encodedData,
            //    address = entity.address,
            //    name = entity.name,
            //    role = role
            //};
            entity.password = encodedData;
            entity.role = role;

            await _context.Users.AddAsync(entity);
            _context.SaveChanges();

            //entity.password = "";
            //JsonSerializerOptions options = new()
            //{
            //    ReferenceHandler = ReferenceHandler.IgnoreCycles,
            //    WriteIndented = true
            //};
            //string jsonResult = JsonSerializer.Serialize(newUser, options);

            //return jsonResult;
            return entity.UserId;
        }

        public async Task<bool> DeleteAdmin(int id)
        {
            UserEntity user=_context.Set<UserEntity>().Find(id);
            if (user == null)
            {
                return false;
            }
            else
            {
                _context.Set<UserEntity>().Remove(user);
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        public async Task<UserEntity> UpdateAdmin(UserEntity entity)
        {
            UserEntity userToUpdate = _context.Set<UserEntity>().Where(e=>e.UserId == entity.UserId).FirstOrDefault();    
            if(userToUpdate != null)
            {
                string encodedData = _utils.EncryptPwd(entity.password);
                userToUpdate.name = entity.name;
                userToUpdate.email = entity.email;
                userToUpdate.password = encodedData;
                userToUpdate.address = entity.address;
                _context.Update(userToUpdate);
                _context.SaveChanges();

                userToUpdate.password = "";
                return userToUpdate;
            }
            else
            {
                return null;
            }
        }

        public async Task<UserEntity> GetUser(int id)
        {
            UserEntity user = _context.Set<UserEntity>().Find(id);
            if (user == null) 
            { 
                return null; 
            } 
            else
            {
                user.password = "";
                return user;
            }
        }

        public async Task<List<UserEntity>> GetAllUsers()
        {
            List<UserEntity> list = _context.Users.AsNoTracking().Include(u => u.role).ToList();
            foreach(UserEntity u in list)
            {
                u.role.Users = null;
                u.password = _utils.DecryptPwd(u.password);
            }
            return list;
        }
    }
}
