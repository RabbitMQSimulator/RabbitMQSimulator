function max_right(box, el) {
    return box.attr("width") + box.attr("x") - el["width"];
}

function inside_max_right(box, el) {
    return el["x"] < max_right(box, el);
}

function max_left(box, el) {
    return box.attr("x");
}

function inside_max_left(box, el) {
    return el["x"] > max_left(box, el);
}

function max_bottom(box, el) {
    return sim_area.attr("height") + sim_area.attr("y") - el["height"];
}

function inside_max_bottom(box, el) {
    return el["y"] < max_bottom(box, el);
}

function max_top(box, el) {
    return sim_area.attr("y");
}

function inside_max_top(box, el) {
    return el["y"] > max_top(box, el);
}

function inside_box(box, el) {
    var r = inside_max_right(box, el),
        l = inside_max_left(box, el),
        t = inside_max_top(box, el),
        b = inside_max_bottom(box, el);
    return r && l && t && b;
}

function get_band_end(band) {
    var band_end = band.attrs.path[band.attrs.path.length - 1];
    return {
        x: band_end[band_end.length - 2],
        y: band_end[band_end.length - 1]
    };
}

