const Spec = {
  el: '.js-spec',

  template: (/* .vue */
  <div class="modal fade" :class="{active: isActive, in: isActive}">
    <div class="modal-backdrop fade" :class="{active: isActive, in: isActive}" @click="close"></div>
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" @click="close">&times;</button>
          <h4 class="modal-title">Heading 1</h4>
        </div>
        <div class="modal-body">
          <form class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-4 control-label required">URL</label>
              <div class="col-sm-8">
                <input type="text" class="form-control" placeholder="url" v-model="url" />
              </div>
            </div>
            <div class="form-group has-feedback">
              <label class="col-sm-4 control-label required">Timestamp</label>
              <input-timestamp placeholder="Timestamp" :value-sync="timestamp"></input-timestamp>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <div class="alert alert-success text-center" v-if="msgSuccess">{{ msgSuccess }}</div>
          <button type="button" class="btn btn-primary" :class="{disabled: isValidating}" v-if="!msgSuccess" @click="validate">
            {{ isValidating ? 'Submitting ...' : 'Submit' }}
          </button>
        </div>
      </div>
    </div>
  </div>
  )/* .vue */,
};


export default Spec;
