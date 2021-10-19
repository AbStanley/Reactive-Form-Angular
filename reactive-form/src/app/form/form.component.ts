import { passwordValidator } from './validators/password.validator';
import { FormBuilder, Validator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { firstNameValidator } from './validators/firstName.validator';
import { birthDateValidator } from './validators/birthDate.validator';
import { agreeValidator } from './validators/agree.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  genreOptions = ['male', 'female', 'other'];

  countryStateOptions: { [key: string]: Array<String> } = {
    "US": ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"],
    "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Dusseldorf", "Dortmund", "Essen", "Leipzig", "Bremen", "Dresden", "Hannover", "Nuremberg", "Duisburg", "Bochum", "Wuppertal", "Bielefeld", "Bonn", "Mannheim", "Karlsruhe", "Wiesbaden", "Augsburg", "Munster", "Wurzburg", "Nuernberg", "Bremen", "Halle", "Saarbruecken", "Aachen", "Freiburg", "Kaiserslautern", "Schwerin", "Luebeck", "Hagen", "Rostock", "Oberhausen", "Erfurt", "Mainz", "Regensburg", "Ingolstadt", "Gera", "Potsdam", "Halle", "Moers", "Aalen", "Kiel", "Magdeburg", "Berlin", "Kassel", "Hagen", "Leverkusen", "Oldenburg", "Lubeck", "Cottbus", "Remscheid", "Dessau-Roetgen", "Solingen", "Ludwigshafen", "Recklinghausen", "Wolfsburg", "Neuss", "Ulm", "Heidelberg", "Paderborn", "Halle", "Leverkusen", "Oldenburg", "Lubeck", "Cottbus", "Remscheid", "Dessau-Roetgen", "Solingen", "Ludwigshafen", "Recklinghausen", "Wolfsburg", "Neuss", "Ulm", "Heidelberg", "Paderborn", "Halle", "Leverkusen", "Oldenburg", "Lubeck", "Cottbus", "Remscheid", "Dessau-Roetgen", "Solingen", "Ludwigshafen", "Recklinghausen", "Wolfsburg", "Neuss", "Ulm", "Heidelberg", "Paderborn", "Halle", "Leverkusen", "Oldenburg"]
  };

  constructor(private formBuilder: FormBuilder) {}

  list_state: string = '';

  onCountryChange($event: any) {
    this.list_state = $event.target.value;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        firstNameValidator.cannotContainSpace,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
        firstNameValidator.cannotContainSpace,
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ]),
      passwords: this.formBuilder.group(
        {
          password: ['', [Validators.required, Validators.minLength(8)]],
          confirmPassword: ['', [Validators.required]],
        },
        {
          validators: passwordValidator.notSamePassword,
        }
      ),
      birthDate: new FormControl('', [
        Validators.required,
        birthDateValidator.minDateValidator,
      ]),
      telephone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      personalSiteUrl: new FormControl('', [
        Validators.pattern(
          '[a-zA-Z0-9]{3,}?[.]{1}?[a-zA-Z0-9]{2,}[.]{1}[a-zA-Z0-9]{2,}'
        ),
      ]),
      aboutMe: [''],
      genre: ['', Validators.required],

      country: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),

      agree: new FormControl('', [
        Validators.required,
        agreeValidator.mustBeChecked,
      ]),
    });
  }
  get agree() {
    return this.form.get('agree');
  }
  get country() {
    return this.form.get('country');
  }

  get state() {
    return this.form.get('state');
  }

  get genre() {
    return this.form!.get('genre');
  }

  get personalSiteUrl() {
    return this.form!.get('personalSiteUrl');
  }

  get telephone() {
    return this.form!.get('telephone');
  }
  get birthDate() {
    return this.form.get('birthDate');
  }
  get password() {
    return this.form!.get('passwords.password');
  }

  get confirmPassword() {
    return this.form!.get('passwords.confirmPassword');
  }

  get email() {
    return this.form.get('email');
  }

  get lastName() {
    return this.form!.get('lastName');
  }

  get firstName() {
    return this.form!.get('firstName');
  }

  showLog(form: any): void {
    console.log(form.value);
  }
}
