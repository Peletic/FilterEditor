export interface FilterJson {
    blacklist: any[]
    whitelist: Whitelist
    user_flip_finder: UserFlipFinder
    true_blacklist: any[]
    global: Global
}

export interface Whitelist {}

export interface UserFlipFinder {}

export interface Global {
    profit: number
    profit_percentage: number
    blacklisted_uuids: any[]
    flipper_modes: FlipperModes
}

export interface FlipperModes {
    "attribute-direct-target": AttributeDirectTarget
    "attribute-target": AttributeTarget
    "direct-target-pet": DirectTargetPet
    "target-pet": TargetPet
    "direct-target": DirectTarget
    "target": Target
    "lbin": Lbin
    "volatile-median": VolatileMedian
}

export interface AttributeDirectTarget {
    enabled: boolean
    min_volume: number
}

export interface AttributeTarget {
    enabled: boolean
    min_volume: number
}

export interface DirectTargetPet {
    enabled: boolean
    min_volume: number
}

export interface TargetPet {
    enabled: boolean
    min_volume: number
}

export interface DirectTarget {
    enabled: boolean
    min_volume: number
}

export interface Target {
    enabled: boolean
    min_volume: number
}

export interface Lbin {
    enabled: boolean
    min_volume: number
}

export interface VolatileMedian {
    enabled: boolean
    min_volume: number
}
