import { Observable } from 'rxjs';

import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';

// Models
import { RequestDTO, ApprovalStatus } from '../../model/request.model';

// Services
import { RequestService } from '../request.service';

@Component({
    selector: 'app-requests-list',
    templateUrl: './requests-list.component.html',
    styleUrls: ['./requests-list.component.scss'],
})
export class RequestsListComponent implements OnInit {

    requests: RequestDTO[];
    PENDING = ApprovalStatus.Pending;



    constructor(
        private requestService: RequestService
    ) { }

    ngOnInit(): void {

        this.getAllRequests();

    }

    getAllRequests(): void {
        this.requestService.getAllRequests().subscribe(res => this.requests = res);
    }

    approve(request: RequestDTO): void {

        this.requestService.updateStatus(request.id, ApprovalStatus.Approved).subscribe(res =>
          {
            console.log(res);
            this.getAllRequests();

          });
    }

    reject(request: RequestDTO): void {

      this.requestService.updateStatus(request.id, ApprovalStatus.Rejected).subscribe(res =>
        {
          console.log(res);
          this.getAllRequests();
        });
    }

}
