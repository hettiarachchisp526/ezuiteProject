using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ecrm.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Deals",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    DealSize = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    DealCategory = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DealEmployee = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DealLocation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Pipeline = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Stage = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastUpdated = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Deals", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Deals");
        }
    }
}
