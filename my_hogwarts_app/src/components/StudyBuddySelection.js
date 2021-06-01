function StudyBuddySelection() {
    return (
        <form id="card-selection-form">
            <div className="card-input-wrapper">
                <label id="name-label" forhtml="card-name">
                    Buddy Name:
                </label>
                <br />
                <input type="text" id="card-name" name="cname" value="" />
                <br />
            </div>
            <div className="card-input-wrapper">
                <label id="url-label" forhtml="card-URL">
                    Address (URL):
                </label>
                <br />
                <input type="text" id="card-URL" name="url" value="" />
                <br />
                <br />
            </div>
            <div className="flex right">
                <button onclick="addCard()" className="btn btn-add" type="button">
                    Add
                </button>
                <button onclick="removeCard()" className="btn btn-remove" type="button">
                    Remove
                </button>
                <button onclick="removeAll()" className="btn btn-remove-all" type="button">
                    Clear
                </button>
            </div>
        </form>
    );
}

export default StudyBuddySelection;
