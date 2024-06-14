import React from 'react'

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ToggleButtonGroup
      value={formats}
      onChange={handleFormat}
      aria-label="text formatting"
    >
      <ToggleButton value="bold" aria-label="bold"  style={{background:"black", width:"50px",height:"40px"}}>
        <FormatBoldIcon  style={{background:"black", width:"50px",height:"40px"}}/>
      </ToggleButton>
      <ToggleButton value="italic" aria-label="italic" style={{background:"black", width:"50px",height:"40px"}}>
        <FormatItalicIcon  style={{background:"black", width:"50px",height:"40px"}}/>
      </ToggleButton>
      <ToggleButton value="underlined" aria-label="underlined"  style={{background:"black", width:"50px",height:"40px"}}>
        <FormatUnderlinedIcon  style={{background:"black", width:"50px",height:"40px"}} />
      </ToggleButton>
      <ToggleButton value="color" aria-label="color" disabled  style={{background:"black", width:"50px",height:"40px"}}>
        <FormatColorFillIcon  style={{background:"black", width:"50px",height:"40px"}}/>
        <ArrowDropDownIcon  style={{background:"black", width:"50px",height:"40px"}} />
      </ToggleButton >
    </ToggleButtonGroup>
  );
};
