import { Component,OnInit} from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChatApp';
}
// export class AppComponent implements OnInit {
//   ngOnInit(){
//     $('#userName').click(function(){
//       alert("hello world");
//     })
//   }
// }
