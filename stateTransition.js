function runKeyFrames(frames, timescale) {
    if (frames.length < 2) {
        // Can't do anything here
        console.warn("runKeyFrames: Must have at least 2 frames");
        return;
    }

    if(frames[0].percentage != 0) {
        console.warn("runKeyFrames: First frame must have 0 percentage");
        return;
    }

    // Remove any frame thats out of sequence
    frames.filter(function(frame, index) {
        return (index < frames.length() -1 && frames[index + 1].percentage < frame.percentage);
    })
    // Map percentages to ms in timescale
    .map(function(frame, index) {
        var time = frame.percentage * timescale;
        delete frame.percentage;
        frame.time = time;
        return frame;
    });


    function consumeFrame(frame) {

    }

    // Step 1: Step between frames w/o easing fn
    // TODO: easing between current frame and next frame
}