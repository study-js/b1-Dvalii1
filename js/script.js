function check(s) {
    var valid = true;
    var stack = [];

    var map = {};
    map["("] = ")";
    map["["] = "]";
    map["{"] = "}";

    for (var i = 0; i < s.length; ++i) {
        if (s[i] == "(" || s[i] == "[" ||s[i] == "{") {
            stack.push(s[i]);
        }
        else if (s[i] == ")" || s[i] == "]" || s[i] == "}") {
            if(stack.length == 0){
                valid = false;
            }
            else {
                var t = stack.pop();
                valid = s[i] == map[t];
            }
        }
        if (!valid){
            break;
        }
    }
    valid = valid && stack.length == 0;
    return valid;
}