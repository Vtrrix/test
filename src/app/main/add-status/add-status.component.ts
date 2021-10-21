import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Editor, toHTML, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-add-status',
  templateUrl: './add-status.component.html',
  styleUrls: ['./add-status.component.css'],
})
export class AddStatusComponent implements OnInit, OnDestroy {
  timeStamp: string;
  currentdate = new Date();
  //using reactive form for add Status form
  form = new FormGroup({
    editorContent: new FormControl(null, [Validators.required]),
  });
  addStatusForm: FormGroup;
  editor: Editor;
  toolbar: Toolbar;
  constructor() {
    const currentdate = new Date();

    this.timeStamp = currentdate.toLocaleString();
    this.editor = new Editor();
    this.toolbar = [
      ['bold', 'italic'],
      ['underline', 'strike'],
      ['code', 'blockquote'],
      ['ordered_list', 'bullet_list'],
      [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
      ['link', 'image'],
      ['text_color', 'background_color'],
      ['align_left', 'align_center', 'align_right', 'align_justify'],
    ];
    this.addStatusForm = new FormGroup({
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      middleName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      address: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(40),
      ]),
    });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  onSave() {
    const html = toHTML(this.form.value.editorContent);
    console.log(html);
    document.getElementById('show')!.innerHTML = html;
  }
}
