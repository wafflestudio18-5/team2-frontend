import { useEffect } from "react"

const useIntersectionObserver = ({
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "0px",
}) => {
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersect, {
      rootMargin,
      threshold,
    })

    if (!target) {
      return
    }

    observer.observe(target)

    return () => {
      observer.unobserve(target)
    }
  }, [target, rootMargin, onIntersect, threshold])
}

export default useIntersectionObserver
