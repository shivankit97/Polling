
import { MatButtonModule,MatCheckboxModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatMenuModule,
                MatIconModule,MatTooltipModule,MatFormFieldModule,MatInputModule,
                MatRadioModule,MatSliderModule,MatSnackBarModule,MatStepperModule,MatChipsModule,MatProgressBarModule],
    exports: [MatButtonModule,MatCheckboxModule,MatToolbarModule,MatMenuModule,
                MatIconModule,MatTooltipModule,MatFormFieldModule,MatInputModule,
                MatRadioModule,MatSliderModule,MatSnackBarModule,MatStepperModule,MatChipsModule,MatProgressBarModule],
})

export class MaterialModule {}