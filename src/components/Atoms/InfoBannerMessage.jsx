import { useEffect, useState } from 'react';
import styled from 'styled-components';

function InfoBannerMessage(props) {
  const [titleArr, setTitleArr] = useState([]);
  useEffect(() => {
    setTitleArr(getTitleArr(props.title));
  }, [props.title]);

  function getTitleArr(title) {
    if (!props.titleBolded || !Array.isArray(props.titleBolded)) return [{ isBold: false, text: title }];
    let arr = [];
    const things = [];
    props.titleBolded.forEach((text) => {
      arr = [
        ...arr,
        ...findMatches(new RegExp(text, 'g'), title)
      ];
    });
    let titleIndex = 0;
    arr.sort((a, b) => a.index < b.index ? -1 : a.index > b.index ? 1 : 0).forEach((match, index) => {
      things.push({isBold: false, text: title.slice(titleIndex, match.index)});
      things.push({isBold: true, text: match[0]});
      titleIndex = match.index + match[0].length;
    });
    if (titleIndex < title.length) things.push({isBold: false, text: title.slice(titleIndex)});
    return things;
  }

  function findMatches(regex, str, matches = []) {
    const res = regex.exec(str);
    res && matches.push(res) && findMatches(regex, str, matches);
    return matches;
  }

  return <StyledInfoBannerMessage>{props.children}</StyledInfoBannerMessage>;
}
const StyledInfoBannerMessage = styled.div`
  padding-top: 30px;
  color: ${props => props.theme.colorWhite};
  text-align: right;
  .hr {
    border-bottom: 1px solid rgb(187, 169, 117);
  }
  .isBold {
    font-weight: 800;
  }
  .message {
    font-size: 2em;
    margin-top: 22px;
  }
  .title {
    font-size: 3em;
    margin-bottom: 15px;
  }
`;
export default InfoBannerMessage;
