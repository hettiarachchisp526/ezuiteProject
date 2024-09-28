import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Deal {
  size: string;
  category: string;
  employee: string;
  location: string;
  pipeline: string;
  stage: string;
  lastUpdate: string;
}

@Component({
  selector: 'app-deals',
  standalone: true,
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
  imports: [FormsModule, CommonModule], // Import necessary modules
})
export class DealsComponent {
  showNewDealForm = false; // Control visibility of the modal
  deals: Deal[] = []; // Initialize deals array
  newDeal: Deal = { size: '', category: '', employee: '', location: '', pipeline: '', stage: '', lastUpdate: '' };
  searchTerm: string = ''; // Search term for filtering deals

  openNewDealForm() {
    this.showNewDealForm = true;
  }

  closeNewDealForm() {
    this.showNewDealForm = false;
  }

  saveNewDeal() {
    this.deals.push({ ...this.newDeal, lastUpdate: new Date().toISOString() });
    this.newDeal = { size: '', category: '', employee: '', location: '', pipeline: '', stage: '', lastUpdate: '' }; // Reset the form
    this.closeNewDealForm(); // Close the modal after saving
  }

  viewDeal(deal: Deal) {
    alert('Viewing deal: ' + JSON.stringify(deal));
  }

  editDeal(deal: Deal) {
    alert('Editing deal: ' + JSON.stringify(deal));
  }

  deleteDeal(deal: Deal) {
    this.deals = this.deals.filter(d => d !== deal);
  }

  filteredDeals() {
    return this.deals.filter(deal =>
      deal.size.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      deal.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      deal.employee.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      deal.location.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      deal.pipeline.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      deal.stage.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  downloadFile() {
    const header = 'Deal Size,Deal Category,Deal Employee,Deal Location,Pipeline,Stage,Last Update\n';
    const rows = this.deals.map(deal => 
      `${deal.size},${deal.category},${deal.employee},${deal.location},${deal.pipeline},${deal.stage},${deal.lastUpdate}`
    ).join('\n');

    const csvContent = header + rows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'deals-data.csv'; // File name
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
