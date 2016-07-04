import { Component, OnInit, FOLDER, CDomNode } from '../../../framework';

@Component({
  moduleId: module.id,
  selector: CDomNode.footer,
  templateUrl: FOLDER.TEMPLATE()
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }

}
