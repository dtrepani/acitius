<form class="search input-group @if(isset($class)) {{ $class }} @endif">
    <input
        class="form-control"
        type="text"
        placeholder="Search..."
    />
    <button class="btn-inside" type="submit">
        <i class="fa fa-fw fa-search" aria-hidden="true"></i>
    </button>
</form>
