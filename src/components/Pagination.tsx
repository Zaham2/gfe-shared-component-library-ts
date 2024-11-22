import React from 'react'
import { GrPrevious, GrNext } from "react-icons/gr";

interface Props {
    numberOfPages?: number
}

const Pagination = (props: Props) => {

    const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
    const [showButtonsText, setShowButtonsText] = React.useState(false);
    const [pages, setPages] = React.useState<JSX.Element[]>([]);

    React.useEffect(() => {
        setCurrentPageIndex(0);
        setShowButtonsText(true);
        const tempPages = Array.from({ length: props.numberOfPages ?? 1 }, (_, index) => {
            return (
                <button
                    key={index}
                    className='pagination-page-number-button'
                    onClick={() => setCurrentPageIndex(index)}
                >
                    {index + 1}
                </button>
            )
        })
        setPages(tempPages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleNumberOfPages = () => {

        if (pages.length <= 5) {
            return Array.from({ length: pages.length }, (_, index) => {
                return (
                    <button
                        key={index}
                        className='pagination-page-number-button'
                        onClick={() => setCurrentPageIndex(index)}
                    >
                        {index + 1}
                    </button>
                )
            })
        }

        const EmptyElement = () => <>...</>

        const preIndex = 2;
        const postIndex = pages.length - 2;

        const preSection = pages.slice(0, preIndex);
        const postSection = pages.slice(postIndex);

        return (<>
            {preSection}
            <EmptyElement />
            {postSection}
        </>)
    }

    return (
        <div className='pagination-container'>
            <div className='pagination-buttons-container'>
                <PrevButton showButtonsText={showButtonsText} />
                <div className='pagination-page-numbers-container'>
                    {handleNumberOfPages()}
                </div>
                <NextButton showButtonsText={showButtonsText} />
            </div>
        </div>
    )
}

interface ButtonProps {
    showButtonsText?: boolean
}

const NextButton = (props: ButtonProps) => {
    return (
        <button className="pagination-next-button">{props.showButtonsText ? 'Next' : ''}<GrNext /></button>
    )
}

const PrevButton = (props: ButtonProps) => {
    return (
        <button className="pagination-prev-button"><GrPrevious />{props.showButtonsText ? 'Previous' : ''}</button>
    )
}

export default Pagination
