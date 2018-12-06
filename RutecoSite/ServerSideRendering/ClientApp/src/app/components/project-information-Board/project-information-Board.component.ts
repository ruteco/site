import { Component, Input, OnInit } from '@angular/core';
import { ProjectInfo } from '../../contracts/project-info';

@Component({
  selector: 'app-project-information-board',
  templateUrl: './project-information-Board.component.html',
})
export class ProjectInformationBoardComponent implements OnInit {
    @Input() projectInfo: ProjectInfo;
    projectShortDescription: string;
    maximumLengthText = 500;
    isShowFullText = false;

    ngOnInit(): void {
      if ( this.projectInfo.projectDescription.length > this.maximumLengthText ) {
        this.projectShortDescription = this.projectInfo.projectDescription.slice(0, this.maximumLengthText);
      }
    }

    getFullText() {
      this.isShowFullText = true;
      // this.projectShortDescription = this.projectInfo.projectDescription;
    }

}
