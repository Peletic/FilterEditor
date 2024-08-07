export interface IFlipperMode {
    enabled: boolean,
    min_volume: number
}

export interface IFlipperModes {
    "attribute-direct-target": AttributeDirectTarget,
    "attribute-target": AttributeTarget,
    "direct-target-pet": DirectTargetPet,
    "target-pet": TargetPet,
    "direct-target": DirectTarget,
    "target": Target,
    "lbin": LBin,
    "volatile-median": VolatileMedian
}

export class FlipperModes implements IFlipperModes {
    constructor() {
        this["attribute-direct-target"] = new AttributeDirectTarget();
        this["attribute-target"] = new AttributeTarget();
        this["direct-target"] = new DirectTarget();
        this["direct-target-pet"] = new DirectTargetPet();
        this["target-pet"] = new TargetPet();
        this["lbin"] = new LBin();
        this["target"] = new Target();
        this["volatile-median"] = new VolatileMedian();
    }
    "attribute-direct-target": AttributeDirectTarget;
    "attribute-target": AttributeTarget;
    "direct-target": DirectTarget;
    "direct-target-pet": DirectTargetPet;
    "target-pet": TargetPet;
    "volatile-median": VolatileMedian;
    "lbin": LBin;
    "target": Target;
}

export interface IGlobal {
    profit: number,
    profit_percentage: number,
    blacklisted_uuids: string[],
    flipper_modes: IFlipperModes
}

export class GlobalSettings implements IGlobal{
    constructor(preDetermined?: IGlobal) {
        this.profit = preDetermined?.profit || 50000000;
        this.blacklisted_uuids = preDetermined?.blacklisted_uuids || [];
        this.flipper_modes = preDetermined?.flipper_modes || new FlipperModes();
        this.profit_percentage = 60;
    }
    blacklisted_uuids: string[];
    flipper_modes: {
        "attribute-direct-target": AttributeDirectTarget;
        "attribute-target": AttributeTarget;
        "direct-target-pet": DirectTargetPet;
        "target-pet": TargetPet;
        "direct-target": DirectTarget;
        target: Target;
        lbin: LBin;
        "volatile-median": VolatileMedian
    };
    profit: number;
    profit_percentage: number;
}

export class AttributeDirectTarget implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : false
        this.min_volume = minVolume || 1
    }
    enabled: boolean
    min_volume: number
}

export class AttributeTarget implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : false
        this.min_volume = minVolume || 1.5
    }
    enabled: boolean
    min_volume: number
}

export class DirectTargetPet implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : true
        this.min_volume = minVolume || 1
    }
    enabled: boolean
    min_volume: number
}

export class TargetPet implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : true
        this.min_volume = minVolume || 2
    }
    enabled: boolean
    min_volume: number
}

export class DirectTarget implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : true
        this.min_volume = minVolume || 1
    }
    enabled: boolean
    min_volume: number
}

export class Target implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : true
        this.min_volume = minVolume || 1
    }
    enabled: boolean
    min_volume: number
}

export class LBin implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : true
        this.min_volume = minVolume || 1
    }
    enabled: boolean
    min_volume: number
}

export class VolatileMedian implements IFlipperMode {
    constructor(enabled? : boolean, minVolume? : number) {
        this.enabled = typeof enabled === "boolean" ? enabled : false
        this.min_volume = minVolume || 1
    }
    enabled: boolean
    min_volume: number
}