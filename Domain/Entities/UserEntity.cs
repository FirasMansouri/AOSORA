using Domain.Object_Values;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entities
{
    public class UserEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public Address address { get; set; }

        [ForeignKey("RoleId")]
        public int RoleId { get; set; }
        public RoleEntity role { get; set; }   


    }

}
