import './counter.css';

const Counter = () => {
    return (
        <>
            <div class="center"></div>
            <div class="inner-spin">
                <div class="inner-arc inner-arc_start-a"></div>
                <div class="inner-arc inner-arc_end-a"></div>
                <div class="inner-arc inner-arc_start-b"></div>
                <div class="inner-arc inner-arc_end-b"></div>

                <div class="inner-moon-a"></div>
                <div class="inner-moon-b"></div>
            </div>
            <div class="outer-spin">
                <div class="outer-arc outer-arc_start-a"></div>
                <div class="outer-arc outer-arc_end-a"></div>
                <div class="outer-arc outer-arc_start-b"></div>
                <div class="outer-arc outer-arc_end-b"></div>

                <div class="outer-moon-a"></div>
                <div class="outer-moon-b"></div>
            </div>
        </>
    );
};

export { Counter };
