import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from "@angular/forms";
import { typeSourceSpan } from "@angular/compiler";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"]
})
export class FormComponent implements OnInit {
  public tourForm: FormGroup;

  @Input() tour;

  @Output() submitBtn = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loadForm();
     
      this.loadData();
  }

  public loadForm() {
    this.tourForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5)]],
      noOfPerson: ["", [Validators.required]],
      phoneNo: ["", [Validators.required, Validators.maxLength(10)]],

      tripPlan: this.fb.group({
        dateTo: ["", [Validators.required]],
        dateFrom: ["", [Validators.required]],
        fromStation: ["", [Validators.required]],
        toStation: ["", [Validators.required]]
      })
    });
  }
  public loadData(){
    this.tourForm.patchValue({
      id:this.tour.id,
      name:this.tour.name,
      noOfPerson:this.tour.noOfPerson,
      phoneNo:this.tour.phoneNo,
      tripPlan:{
        dateTo:this.tour.tripPlan.dateTo,
        dateFrom:this.tour.tripPlan.dateFrom,
        fromStation:this.tour.tripPlan.fromStation,
        toStation:this.tour.tripPlan.toStation
      }
    })
  }

  onSubmit(form) {
    this.submitBtn.emit(form);
    console.log(form);
    
    console.log(this.submitBtn);
  }
  public get name(): AbstractControl {
    return this.tourForm.get("name");
  }
  public get noOfPerson(): AbstractControl {
    return this.tourForm.get("noOfPerson");
  }
  public get phoneNo(): AbstractControl {
    return this.tourForm.get("phoneNo");
  }
  public get dateTo(): AbstractControl {
    return this.tourForm.get("tripPlan.dateTo");
  }
  public get dateFrom(): AbstractControl {
    return this.tourForm.get("tripPlan.dateFrom");
  }
  public get fromStation(): AbstractControl {
    return this.tourForm.get("tripPlan.fromStation");
  }
  public get toStation(): AbstractControl {
    return this.tourForm.get("tripPlan.toStation");
  }
}
