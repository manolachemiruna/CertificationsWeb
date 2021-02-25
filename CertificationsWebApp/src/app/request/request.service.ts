
import { RequestDTO, Quarter, ApprovalStatus } from '../model/request.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';

@Injectable({ providedIn: 'root' })
export class RequestService {


    constructor(private http: HttpClient) { }


    requests: RequestDTO[];

    public getRequestByParticipantName(name: string): Observable<RequestDTO[]> {

        return this.http.get<Array<RequestDTO>>(`https://localhost:8443/api/requests/user/allRequests/${name}`);
    }

    public getAllRequests(): Observable<RequestDTO[]> {
        return this.http.get<Array<RequestDTO>>('https://localhost:8443/api/requests/admin/allRequests');
    }

    public getId(name: string): any
    {

      return this.http.get<number>(`https://localhost:8443/api/users/user/${name}`);

    }

    public addRequest(request: RequestDTO, userId: number, certificationId: number): any {

        // tslint:disable-next-line: max-line-length
        return this.http.post<RequestDTO>(`https://localhost:8443/api/requests/user/userId/${userId}/certificationId/${certificationId}`, request);

    }

    public updateStatus(id: number, approvalStatus: string): any
    {
      return this.http.patch(`https://localhost:8443/api/requests/admin/updateRequestStatus/${id}`, { status: approvalStatus});
    }

    public updateBusinessJustification(requestId: number, businessJustification: string): any {

      return this.http.patch(`https://localhost:8443/api/requests/user/updateBusinessJustification/${requestId}`, { "businessJustification": businessJustification});
    }


    public deleteRequest(id: number): any{

        return this.http.delete(`https://localhost:8443/api/requests/user/deleteRequest/${id}`);
    }




}
