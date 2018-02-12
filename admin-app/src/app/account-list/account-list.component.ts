import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account/account.model';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'admin-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @Input() accounts: Account[];

  constructor(private accountService: AccountService) { }

  ngOnInit() {

    this.accountService.getAccounts().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
    });


  }

}
