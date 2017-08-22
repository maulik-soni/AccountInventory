export class Search{
    constructor(
        public filter:Array<string>,
        public filterby:Array<string>
        
        
    ){}
    
}

export class SearchValues{
    constructor(
        public filter:string,
        public filterby?:string,
        public search?:string,
        public from?:string,
        public to?:string
    ){}
}