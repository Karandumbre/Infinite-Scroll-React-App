/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { debounce } from "../utils/debounce";
export const useInfiniteScroll = () => {
  const MAX_PAGES = useSelector((state) => state.total_pages);
  const CURRENT_PAGE = useSelector((state) => state.current_page);
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(CURRENT_PAGE);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }

    setLoading(true);
  }, 500);

  useEffect(() => {
    if (!loading) return;
    if (count + CURRENT_PAGE > MAX_PAGES) {
      setCount(CURRENT_PAGE);
    } else {
      setCount(count + CURRENT_PAGE);
    }

    setLoading(false);
  }, [loading]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
