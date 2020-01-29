using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repository.Migrations
{
    public partial class Neighborhood : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Neighborhood",
                table: "DeliveryAddresses",
                nullable: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Neighborhood",
                table: "DeliveryAddresses");
        }
    }
}
