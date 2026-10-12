import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const controller = new AbortController();

        fetch(
            `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
            { signal: controller.signal }
        )
            .then((res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.json();
            })
            .then((res) => setData(res[currency] || {}))
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("Currency fetch failed:", err);
                    setData({});
                }
            });

        return () => controller.abort();
    }, [currency]);

    return data;
}

export default useCurrencyInfo;