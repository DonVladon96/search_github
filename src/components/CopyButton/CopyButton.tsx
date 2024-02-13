import { useState } from "react";
import clipboard from "clipboard-copy";
import './CopyButton.css'

type Props = {
    text: string;
};

function CopyButton({ text }: Props) {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopy = () => {
        clipboard(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <button className="searchform__button" onClick={handleCopy}>
            {copied? "Copied" : "Copy"}
        </button>
    );
}

export default CopyButton;
