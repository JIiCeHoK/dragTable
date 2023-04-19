import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { map, Observable } from 'rxjs';
import { ITableData, IUser } from '../../shared/interfaces/user';

@Component({
    selector: 'app-table-component',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './table-component.component.html',
    styleUrls: ['./table-component.component.less']
})
export class TableComponentComponent implements OnInit {
    @Input() columns: any;

    tableData$: Observable<IUser[]> | null = null;

    constructor(private api: ApiService) {

    }

    ngOnInit() {
        this.tableData$ = this.api.getData$().pipe(map((result: ITableData | null) => {
            if (!result) {
                return []
            }
            return result.users;
        }))

    }
}
