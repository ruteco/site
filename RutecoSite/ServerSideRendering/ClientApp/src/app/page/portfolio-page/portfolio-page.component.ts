import { Component } from '@angular/core';
import { ProjectInfo } from '../../contracts/project-info';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio-page.component.html'
})
export class PortfolioComponent {
  projectInformationBoard: ProjectInfo[] = [
    {
      projectName: 'proj1',
      projectLink: '',
      projectDescription: `ffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffff
      ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`,
      siteLinks: '',
      useTechnologies: [{
        shortName: 'gg',
        fullName: 'gaga',
        path: '/assets/Child.PNG'
      },
      {
        shortName: 'gg',
        fullName: '2',
        path: ''
      },
      {
        shortName: 'gg',
        fullName: '3',
        path: ''
      },
      {
        shortName: 'gg',
        fullName: '4',
        path: ''
      },
      {
        shortName: 'gg',
        fullName: '5',
        path: ''
      }
      ,
      {
        shortName: 'gg',
        fullName: '6',
        path: ''
      }
      ,
      {
        shortName: 'gg',
        fullName: '7',
        path: ''
      }
    ],
      imageLink: '/assets/Child.PNG',
      siteName: 'site1',
      isEven: false
    },
    {
      projectName: 'proj2',
      projectLink: '',
      projectDescription: 'gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
      siteLinks: '',
      useTechnologies: [{
        shortName: 'gg',
        fullName: 'gaga',
        path: ''
      },
      {
        shortName: 'gg',
        fullName: '2',
        path: ''
      },
      {
        shortName: 'gg',
        fullName: '3',
        path: ''
      }],
      imageLink: '/assets/Child.PNG',
      siteName: 'site1',
      isEven: true
    }
  ];

}
