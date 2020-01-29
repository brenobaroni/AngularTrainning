using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repository.Migrations
{
    public partial class UpdateDeliveryAddressTry4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
             migrationBuilder.AddColumn<string>(
                name: "Province",
                table: "DeliveryAddresses",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
