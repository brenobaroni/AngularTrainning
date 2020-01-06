using QuickBuy.Domain.Entities;

namespace QuickBuy.Domain.Entities
{
    public class Product : Entitie
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public string ArchiveName { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Name))
                AddWarning("<p><b>Product Name</b> is required</p>");

            if (string.IsNullOrEmpty(Description))
                AddWarning("<p><b>Product Description</b> is required</p>");

            if (Price <= 0)
                AddWarning("<p><b>Price</b> is required</p>");
        }
    }
}
