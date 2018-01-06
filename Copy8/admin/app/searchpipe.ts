import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "searchPipe"
})

@Injectable()
export class SearchPipe implements PipeTransform
{
    transform(input: any,args):any
    {
        console.log(args);
        if (input==null) 
        {
            return null;
        }
        if(args==null)
        {
            //returns the same array when no args is passes ie.search box is empty
            return input;
        }
        // returns an array strats with args we passed
        return input.filter((student)=> student.usn.toLowerCase().startsWith(args.toLowerCase()) );       
    }
    
}