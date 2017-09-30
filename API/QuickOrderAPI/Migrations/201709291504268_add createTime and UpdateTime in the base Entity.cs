namespace QuickOrderAPI.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addcreateTimeandUpdateTimeinthebaseEntity : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Restaurant", "CreateTime", c => c.DateTime(nullable: false));
            AddColumn("dbo.Restaurant", "UpdateTime", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Restaurant", "UpdateTime");
            DropColumn("dbo.Restaurant", "CreateTime");
        }
    }
}
