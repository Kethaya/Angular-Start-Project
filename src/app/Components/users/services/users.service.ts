import { Injectable } from "@angular/core";
import { Users } from "./users.model";

@Injectable()
export class userService {
  private Users: Users[] = [
    { id: 'U0001', name: 'Salma Hayek', status: 'Active' },
    { id: 'U0002', name: 'Tom Holland', status: 'Active' },
    { id: 'U0003', name: 'Jared Leto', status: 'Active' },
    { id: 'U0004', name: 'Anya Taylor-Joy', status: 'Active' },
    { id: 'U0005', name: 'Jim Carrey', status: 'Active' },
    { id: 'U0006', name: 'Robert Pattinson', status: 'Pending' },
    { id: 'U0007', name: 'Colin Farrell', status: 'Active' },
    { id: 'U0008', name: 'Brian Tyree Henry', status: 'Pending' },
    { id: 'U0009', name: 'Emily Blunt', status: 'Active' },
    { id: 'U0010', name: 'Marlon Brando', status: 'Inactive' },
    { id: 'U0011', name: 'Margot Robbie', status: 'Active' },
    { id: 'U0012', name: 'Finn Wolfhard', status: 'Active' },
    { id: 'U0013', name: 'Florence Pugh', status: 'Active' },
    { id: 'U0014', name: 'Katharine Hepburn', status: 'Inactive' },
    { id: 'U0015', name: 'Humphrey Bogart', status: 'Inactive' },
  ];

  getUsers() {
    return this.Users.slice();
  }
}
