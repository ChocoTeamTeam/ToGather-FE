import { SearchContainer, TechsContainer, TechBtn } from './SearchMenu.style';
import { techs } from '../@icons/index';
import { useRecoilState } from 'recoil';
import { searchTechsAtom } from '../../contexts/SeacrchTechsAtom';
import { useEffect, useState } from 'react';
import useCheckIsScrollOver from '../../hooks/useCheckIsScrollOver';

interface SearchMenuProps {
  searchIsOpen: boolean;
}

const SearchMenu = ({ searchIsOpen }: SearchMenuProps) => {
  const [isScrollOver, setIsScrollOver] = useState(false);

  const handleScroll = () => {
    useCheckIsScrollOver(setIsScrollOver, 15);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  const [filteredTech, setFilterTech] = useRecoilState(searchTechsAtom);

  const handleTechBtn = (tech: string) => {
    const copied = { ...filteredTech };
    delete copied[tech];

    const isPresentTech = filteredTech[tech];

    if (isPresentTech) {
      setFilterTech(copied);
    } else setFilterTech({ ...filteredTech, [tech]: true });
  };

  return (
    <SearchContainer isOpen={searchIsOpen} isScrollOver={isScrollOver}>
      <TechsContainer>
        {techs.map(({ tech, icon }) => (
          <TechBtn
            key={tech}
            className="tech__Btn"
            onClick={() => {
              handleTechBtn(tech);
            }}
            isOn={filteredTech[tech]}
          >
            {icon()}
            {tech}
          </TechBtn>
        ))}
      </TechsContainer>
    </SearchContainer>
  );
};

export default SearchMenu;

export {};
