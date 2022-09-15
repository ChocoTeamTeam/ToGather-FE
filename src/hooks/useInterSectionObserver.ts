import { EmotionJSX } from "@emotion/react/types/jsx-namespace";


const useInterSectionObserver = (element:EmotionJSX.Element) => {
  return new IntersectionObserver(entries => {
    console.log(entries);
  })
}

export default useInterSectionObserver