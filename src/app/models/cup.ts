export class Cup {
    name: string;
    type?: string;
    full?: boolean;

    constructor(name: string, type: string, full: boolean) {
        this.name = name;
        this.type = type;
        this.full = full;
    }

}