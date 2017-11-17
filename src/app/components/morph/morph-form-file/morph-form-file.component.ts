import { Component, OnInit } from '@angular/core';

import { MorphApiService } from '../../../services/morph-api.service';

@Component({
    selector: 'app-morph-form-file',
    templateUrl: './morph-form-file.component.html',
    styleUrls: ['./morph-form-file.component.css']
})
export class MorphFormFileComponent implements OnInit {
    errorMessage: string;

    constructor(private morphApiService: MorphApiService) {}

    ngOnInit() {
        this.morphApiService.clear();
    }

    fileUpload(event: any) {
        let fileList: FileList = event.target.files;
        if (fileList.length > 0) {
            let file: File = fileList[0];

            if (file.size > 1000000) {
                this.errorMessage = 'ファイルサイズが大きすぎます。1M以下のファイルを選択してください。';
                return;
            }

            var reader:FileReader = new FileReader();
            reader.onloadend = this._fileLoaded.bind(this);
            reader.readAsText(file);

            this.errorMessage = '';
        }
    }

    _fileLoaded(readerEvent: any) {
        this.morphApiService.parse(readerEvent.target.result);
    }

}
