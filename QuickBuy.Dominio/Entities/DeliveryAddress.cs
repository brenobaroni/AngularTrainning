using QuickBuy.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace QuickBuy.Domain.Entities
{
    public class DeliveryAddress : Entitie
    {
        [Key]
        public int Id { get; set; }

        //User
        [ForeignKey("User")]
        public int UserId { get; set; }
        public virtual User User { get; set; }



        public string PublicPlace { get; set; }
        public string Annotation { get; set; }
        public int Number { get; set; }
        public string CEP { get; set; }
        //public string Complemento { get; set; }
        public string Country { get; set; }
        public string Province { get; set; }

        public string Neighborhood { get; set; }
        public string City { get; set; }


        public override void Validate()
        {
            if (string.IsNullOrEmpty(CEP))
            {
                AddWarning("Warning - CEP is empty");
            }

            if (string.IsNullOrEmpty(PublicPlace))
            {
                AddWarning("Warning - Street Address is empty");
            }

            if (Number <= 0)
            {
                AddWarning("Warning - Number is Invalid or Empty");
            }


            if (string.IsNullOrEmpty(City))
            {
                AddWarning("Warning - City is empty");
            }


            if (string.IsNullOrEmpty(Province))
            {
                AddWarning("Warning - Province is empty");
            }

            if (string.IsNullOrEmpty(Neighborhood))
            {
                AddWarning("Warning - Neighborhood is empty");
            }

            if (string.IsNullOrEmpty(Country))
            {
                AddWarning("Warning - Country is empty");
            }


        }
    }

}
