export class Token {
    surface: string;
    baseForm: string;
    feature: string;
    reading: string;
    features: string[];

    constructor([surface, f1, f2, f3, f4, f5, f6, baseForm, reading, pronunciation]) {
        this.surface = surface;
        this.baseForm = baseForm;
        this.reading = reading;
        this.features = [f1, f2, f3, f4, f5, f6];
        this.feature = this.features.join(',');
    }
}
