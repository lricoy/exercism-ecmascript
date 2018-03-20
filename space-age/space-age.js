const earthOrbitalYearInSeconds = 31557600;

export default function SpaceAge(ageInSeconds) {
    const getAgeBasedOnEarthYear = (multiplier = 1) =>
        Math.round(
            ageInSeconds / earthOrbitalYearInSeconds / multiplier * 100,
        ) / 100;
    return {
        seconds: ageInSeconds,
        onEarth() {
            return getAgeBasedOnEarthYear();
        },
        onMercury() {
            return getAgeBasedOnEarthYear(0.2408467);
        },
        onVenus() {
            return getAgeBasedOnEarthYear(0.61519726);
        },
        onMars() {
            return getAgeBasedOnEarthYear(1.8808158);
        },
        onJupiter() {
            return getAgeBasedOnEarthYear(11.862615);
        },
        onSaturn() {
            return getAgeBasedOnEarthYear(29.447498);
        },
        onUranus() {
            return getAgeBasedOnEarthYear(84.016846);
        },
        onNeptune() {
            return getAgeBasedOnEarthYear(164.79132);
        },
    };
}
