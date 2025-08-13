// utils/dateUtils.js
export function getYearOptions(minAge = 14, maxAge = 100) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - maxAge; // 가장 오래된 연도
    const endYear = currentYear - minAge; // 가장 최근 연도

    const years = [];
    for (let year = endYear; year >= startYear; year--) {
        years.push(year);
    }
    return years;
}
