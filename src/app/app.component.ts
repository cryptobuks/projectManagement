import { Component, OnInit} from '@angular/core';
import { ConfigurationApp } from './app.config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  private config: ConfigurationApp = new ConfigurationApp();
   
  public constructor(private titleService: Title) {}

  title: string;

  ngOnInit() {
    this.title = this.config.title;
    this.titleService.setTitle(this.title);
  }

}
