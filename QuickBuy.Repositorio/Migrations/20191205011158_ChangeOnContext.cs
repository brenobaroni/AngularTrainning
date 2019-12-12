using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repository.Migrations
{
    public partial class ChangeOnContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 2,
                column: "Description",
                value: "Credit Card Payment Type");

            migrationBuilder.UpdateData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 3,
                column: "Description",
                value: "Deposit Payment Type");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 2,
                column: "Description",
                value: "Billet Payment Type");

            migrationBuilder.UpdateData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 3,
                column: "Description",
                value: "Billet Payment Type");
        }
    }
}
