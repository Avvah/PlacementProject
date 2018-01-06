import{ Component,Output,EventEmitter } from '@angular/core';

@Component({
    selector:'search-box',
    template:`<div class="form-group pull-right">
						<input #input  type="text" placeholder="search" class="form-control" style="background-color:#fff" (input)=update.emit(input.value)>
					</div>`
})

export class SearchBoxComponent
{
    @Output() update= new EventEmitter();

    ngOnInit()
    {
        this.update.emit('')
    }

}