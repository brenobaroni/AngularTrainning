using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repository.Migrations
{
    public partial class ChargePaymentMetod : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            if (migrationBuilder != null)
            {

                migrationBuilder.InsertData(
                    table: "PaymentMetod",
                    columns: new[] { "Id", "Description", "Name" },
                    values: new object[] { 1, "Billet Payment Type", "Billet" });

                migrationBuilder.InsertData(
                    table: "PaymentMetod",
                    columns: new[] { "Id", "Description", "Name" },
                    values: new object[] { 2, "Billet Payment Type", "Credit Card" });

                migrationBuilder.InsertData(
                    table: "PaymentMetod",
                    columns: new[] { "Id", "Description", "Name" },
                    values: new object[] { 3, "Billet Payment Type", "Deposit" });
            }
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "PaymentMetod",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
