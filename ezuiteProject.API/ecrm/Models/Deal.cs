namespace ecrm.Models
{
    public class Deal
    {
        public int ID { get; set; } 
        public decimal DealSize { get; set; } 
        public string DealCategory { get; set; } 
        public string DealEmployee { get; set; }
        public string DealLocation { get; set; } 
        public string Pipeline { get; set; } 
        public string Stage { get; set; }
        public DateTime LastUpdated { get; set; } 
    }
}
