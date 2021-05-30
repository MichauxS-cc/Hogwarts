function StudyBuddySelection() {
    return (
        <form id="card-selection-form">
            <div class="card-input-wrapper">
                <label id="name-label" for="card-name">
                    Buddy Name:
                </label>
                <br />
                <input type="text" id="card-name" name="cname" value="" />
                <br />
            </div>
            <div class="card-input-wrapper">
                <label id="url-label" for="card-URL">
                    Address (URL):
                </label>
                <br />
                <input type="text" id="card-URL" name="url" value="" />
                <br />
                <br />
            </div>
            <div class="flex right">
                <button onclick="addCard()" class="btn btn-add" type="button">
                    Add
                </button>
                <button onclick="removeCard()" class="btn btn-remove" type="button">
                    Remove
                </button>
                <button onclick="removeAll()" class="btn btn-remove-all" type="button">
                    Clear
                </button>
            </div>
        </form>
    );
}

export default StudyBuddySelection;
